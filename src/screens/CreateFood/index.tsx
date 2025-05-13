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

export function CreateFood(){
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');

    const [date, setDate] = useState(new Date());
    const [exibitDate, setExibitDate] = useState(format(new Date(), "dd/MM/yyyy"));

    const [hour, setHour] = useState(new Date());
    const [exibithour, setExibithour] = useState(format(new Date(), "HH:mm"));

    const [showDate, setShowDate] = useState(false);
    const [showHour, setShowHour] = useState(false);

    const [pickingMode, setPickingMode] = useState<"date" | "time">('date');

    const [isInDiet,setIsInDiet] = useState<boolean>(true);

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
                datehour: new Date(`${month}-${day}-${year} ${exibithour}`),
                isInDiet
            });
            navigate("Feedback",{
                isInDiet
            })
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message);
            } else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
                console.log(error);
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
                type='NEUTRAL'
                textType='MIDDLE'
                text='Nova refeição' 
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
                            value={new Date()}
                            mode="date"
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
                            value={new Date()}
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

                title="Cadastrar refeição"
                size="LARGE"
                onPress={handleCreateNewFood}
                disabled={!name || !description}
            />
        </Container>
    )
}