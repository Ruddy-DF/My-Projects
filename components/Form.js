import React from "react";
import {StyleSheet, TextInput, View, Button} from "react-native";
import { Formik } from 'formik';


function Form({addArticle}) {
    return (
        <View>
            <Formik initialValues={{name: '', anons: '', full: '', img: ''}}
                    onSubmit={(values,action) => {addArticle(values);
                        action.resetForm();
                    }}>
                {(props) => (
                    <View>
                        <TextInput
                            value={props.values.name}
                            placeholder='Введите название'
                            onChangeText={props.handleChange('name')} />
                        <TextInput
                            value={props.values.anons}
                            multiline
                            placeholder='Введине описание'
                            onChangeText={props.handleChange('anons')} />
                        <TextInput
                            value={props.values.full}
                            multiline
                            placeholder='Введите текст'
                            onChangeText={props.handleChange('full')} />
                        <TextInput
                        value={props.values.img}
                        placeholder='Add Photo'
                        onChangeText={props.handleChange('img')}/>
                        <Button title='Опубликовать' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    );
}




export default Form