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
import { foodCUpdate } from "@storage/food/foodUpdate";
import { ContentContainer } from "@screens/ViewFood/styles";

export function CreateFood(){
    const route = useRoute();
    const { headerTitle } = route.params as { headerTitle: string };
    const { headerStyle } = route.params as { headerStyle: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' };
    const { id } = route.params as { id: string };
    const { titleParam } = route.params as { titleParam: string };
    const { descriptionParam } = route.params as { descriptionParam: string };
    const { dateParam } = route.params as { dateParam: string };
    const dayMonthYear = dateParam ? dateParam.split('/') : ''
    
    const { hourParam } = route.params as { hourParam: string };
    const { onDietParam }  = route.params as { onDietParam: boolean };

    const [name,setName] = useState(titleParam ? titleParam : '');
    const [description,setDescription] = useState(descriptionParam ? descriptionParam :'');

    const [date, setDate] = useState(dateParam && hourParam ? new Date(`${dayMonthYear[2]}-${dayMonthYear[1]}-${dayMonthYear[0]}T${hourParam}`) : new Date());
    const [exibitDate, setExibitDate] = useState(dateParam ? dateParam : format(new Date(), "dd/MM/yyyy"));

    const [hour, setHour] = useState(dateParam && hourParam ? new Date(`${dayMonthYear[2]}-${dayMonthYear[1]}-${dayMonthYear[0]}T${hourParam}`) : new Date());
    const [exibithour, setExibithour] = useState(hourParam ? hourParam : format(new Date(), "HH:mm"));
    
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
        const date = exibitDate.split('/')
        const day = date[0]
        const month = date[1]
        const year = date[2]
        if(headerTitle == 'Nova refeição'){
            try {
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
            try{
                await foodCUpdate({
                    id,
                    name,
                    description,
                    date: exibitDate,
                    hour: exibithour,
                    datehour: new Date(`${month}-${day}-${year}T${exibithour}`),
                    isInDiet
                })

                navigate("ViewFood",{
                    id,
                })
            }
             catch (error) {
                if(error instanceof AppError) {
                    Alert.alert('Editar Refeição', error.message);
                } else {
                    Alert.alert('Novo Grupo', 'Não foi possível atualizar a refeição.');
                    console.log(error);
                }
            }
            
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
            <ContentContainer>
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
            </ContentContainer>
        </Container>
    )
}