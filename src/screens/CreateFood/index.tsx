import { StatisticsHeader } from "@components/StatisticsHeader";
import { Container, DateInput, FlexEnd, Form, FormItem, FormRow, FormRowItem, Input, Label, TextArea, TextDateHour } from "./styles";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Alert, Platform } from "react-native";
import { format } from "date-fns";
import { Button } from "@components/Button";
import { navigate } from "@routes/NavigationService";
import { RadioButton } from "@components/RadioButton";

import { foodCreate } from "@storage/food/foodCreate";
import { AppError } from "@utils/AppError";

import { useRoute } from "@react-navigation/native";

export function CreateFood(){
    const route = useRoute();
    const { headerTitle } = route.params as { headerTitle: string };
    const { headerStyle } = route.params as { headerStyle: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' };
    const { id } = route.params as { id: string };
    const { titleParam } = route.params as { titleParam: string };
    const { descriptionParam } = route.params as { descriptionParam: string };
    const { dateParam } = route.params as { dateParam: string };
    const dayMonthYear = dateParam.split('/')
    
    const { hourParam } = route.params as { hourParam: string };
    const { onDietParam }  = route.params as { onDietParam: boolean };
    const { dateHourParam }  = route.params as { dateHourParam: Date };

    const [name,setName] = useState(titleParam ? titleParam : '');
    const [description,setDescription] = useState(descriptionParam ? descriptionParam :'');

    const [date, setDate] = useState(dateParam && hourParam ? new Date(`${dayMonthYear[1]}-${dayMonthYear[0]}-${dayMonthYear[2]} ${hourParam}`) : new Date());
    const [exibitDate, setExibitDate] = useState(dateParam ? dateParam : format(new Date(), "dd/MM/yyyy"));

    const [hour, setHour] = useState(dateParam && hourParam ? new Date(`${dayMonthYear[1]}-${dayMonthYear[0]}-${dayMonthYear[2]} ${hourParam}`) : new Date());
    const [exibithour, setExibithour] = useState(hourParam ? hourParam : format(new Date(), "HH:mm"));

    console.warn(`${dayMonthYear[1]}-${dayMonthYear[0]}-${dayMonthYear[2]} ${hourParam}`)
    
    const [showDate, setShowDate] = useState(false);
    const [showHour, setShowHour] = useState(false);

    const [pickingMode, setPickingMode] = useState<"date" | "time">('date');

    const [isInDiet,setIsInDiet] = useState<boolean>(typeof onDietParam !== "undefined" ? onDietParam : true );

     const showPicker = (pickerMode: "date" | "time") => {
        if(pickerMode == 'date'){
            setPickingMode('date')
            setShowDate(true)
        }else{
            setPickingMode('time')
            setShowHour(true)
        }
    };

    async function handleCreateNewFood(){
        if(headerTitle == 'Nova refeição'){
            try {
                const date = exibitDate.split('/')
                const day = date[0]
                const month = date[1]
                const year = date[2]
                
                await foodCreate({
                    name: name,
                    description:description,
                    date:exibitDate,
                    hour:exibithour,
                    datehour: new Date(`${month}-${day}-${year}T${exibithour}`),
                    isInDiet,
                });
                navigate("Feedback",{
                    isInDiet
                })
            } catch (error) {
                if(error instanceof AppError) {
                    Alert.alert('Nova Refeição', error.message);
                } else {
                    Alert.alert('Novo Grupo', 'Não foi possível criar uma nova refeição.');
                    console.log(error);
                }
            }
        }else{

        }
        
    }

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShowDate(false)
        setShowHour(false)

        if (selectedDate) {
            if(pickingMode == 'date'){
                setDate(selectedDate)
                setExibitDate(format(selectedDate, "dd/MM/yyyy"))
            }else{
                setHour(selectedDate)
                setExibithour(format(selectedDate, "HH:mm"))
            }
        }
    };

    const handleCheckIsInDiet = ()=>{
        setIsInDiet(true)
    }
    const handleCheckIsnotInDiet = ()=>{
        setIsInDiet(false)
    }
        
    return(
        <Container>
            <StatisticsHeader 
                type={headerStyle}
                textType='MIDDLE'
                text={headerTitle}
            />
            <Form>
                <FormItem>
                    <Label>
                        Nome
                    </Label>
                    <Input value={name} onChangeText={setName} />  
                </FormItem>
                <FormItem>
                    <Label>
                        Descrição
                    </Label>
                    <TextArea value={description} onChangeText={setDescription} />  
                </FormItem>
                <FormRow>
                    <FormRowItem>
                        <Label>
                            Data
                        </Label>
                        <DateInput onPress={() => showPicker("date")}>
                            <TextDateHour>{exibitDate}</TextDateHour>
                        </DateInput>
                        { showDate && <DateTimePicker
                            onChange={onChange}
                            value={date}
                            mode="date"
                            maximumDate={new Date()}
                            is24Hour={true}
                            display={Platform.OS === "ios" ? "spinner" : "default"}
                        /> }
                        
                    </FormRowItem>
                    
                    <FormRowItem>
                        <Label>
                            Hora
                        </Label>
                        <DateInput onPress={() =>showPicker("time")} >
                            <TextDateHour>{exibithour}</TextDateHour>
                        </DateInput>
                        {showHour && <DateTimePicker
                            onChange={onChange}
                            value={hour}
                            mode="time"
                            is24Hour={true}
                            display={Platform.OS === "ios" ? "spinner" : "default"}
                        />}
                    </FormRowItem>
                </FormRow>
                <FormRow>
                    <FormRowItem>
                        <Label>
                            Está dentro da dieta?
                        </Label>
                        <RadioButton
                            title="Sim"
                            variant="POSITIVE"
                            active={isInDiet}
                            onPress={handleCheckIsInDiet}
                        />
                    </FormRowItem>
                    <FormRowItem>
                        <Label>
                        </Label>
                        <RadioButton
                            title="Não"
                            variant="NEGATIVE"
                            active={!isInDiet}
                            onPress={handleCheckIsnotInDiet}
                        />
                    </FormRowItem>
                </FormRow>
                <FlexEnd/>               
            </Form>
            <Button

                title={headerTitle =='Nova refeição'?"Cadastrar refeição":"Salvar alterações "}
                size="LARGE"
                onPress={handleCreateNewFood}
                disabled={!name || !description}
            />
        </Container>
    )
}