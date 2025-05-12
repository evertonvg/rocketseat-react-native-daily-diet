import { StatisticsHeader } from "@components/StatisticsHeader";
import { Container, DateInput, FlexEnd, Form, FormItem, FormRow, FormRowItem, Input, Label, TextArea, TextDateHour } from "./styles";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform } from "react-native";
import { format } from "date-fns";
import { Button } from "@components/Button";
import { navigate } from "@routes/NavigationService";
import { RadioButton } from "@components/RadioButton";

export function CreateFood(){
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

    const handleNavigateToFeedback = () =>{
        navigate("Feedback")
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
                    <Input/>  
                </FormItem>
                <FormItem>
                    <Label>
                        Descrição
                    </Label>
                    <TextArea/>  
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
                onPress={handleNavigateToFeedback}
            />
        </Container>
    )
}