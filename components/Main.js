import React, {useState} from  "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Modal } from 'react-native';
import {gStyle} from "../styles/Style";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Form from '../components/Form';


function Main({ navigation } ) {
    const [news, setNews] = useState([
        {name: 'kaskelen life',
            anons: 'В Карасайском районе ресторан нарушил карантинные ограничения',
            full: 'В ходе проверки 14 августа 2021 года в 17:14 ч. проверяющие выявили, что в ресторане «МузТау» проводилось торжество. Кроме того, выяснилось, что при входе у посетителей не измерялась температура тела. Все собранные материалы направлены в Управление санитарно - эпидемиологического контроля Карасайского района',
            key: '1',
            img: 'https://kaskelen.kz/sites/default/files/information_items_property_22630.jpeg'},
        {name: '"Вы не выполнили свое обещание!"',
            anons: 'юрист потребовала от акима Карасайского района покинуть пост до выборов',
            full: 'Вчера 20.10.2021г. аким Карасайского района Жандарбек Далабаев провел онлайн-встречу с населением. Об этом он написал в посте на своей инстастранице.\n' +
                'Под постом жители начали оставлять свои комментарий. Наше внимание привлек комментарий юриста, гражданской активистки Сауле Бикитеевой. Она в своем комментарии потребовала отставки акима.\n' +
                '\n' +
                'На наш вопрос, почему она требует отставки акима, ответ был такой:\n' +
                '\n' +
                '"Да, я требую отставки Акима района господина Ж. Е. Далабаева до выборов. Напишу кратко. Потому что он не выполнил ни одно обещание. Работу его оцениваю "очень плохо" . Может ли он доказать обратное? Лично на приёме обещал построить музыкальную школу в Каскелене, что деньги вот аким области А.Г.Баталов выделил. А в сентябре 2021 году ни школы, ни денег? А где интересно деньги?\n' +
                'А знаете сколько талантливых детей в сёлах? Им просто некуда идти учиться? Нонсенс!\n' +
                'Жители района тоже жалуются, что с Айтей дети не могут добраться в школу, просто нет автобусов. Бред! 21 век!\n' +
                'В других округах жалуются на воду, дороги, освещение, про больницы вообще молчу!!! По Известковой верх, в горах девочки и волонтёры устали убирать использованные салфетки и прочие, по 10 машин каждую ночь там, никто не патрулирует. Одни критики и недовольство.\n' +
                'Так почему такие акимы районов и областей должны ПРОСТО ОТСИЖЫВАТЬСЯ В КАБИНЕТАХ? ИЛИ НЕДАВНО ПОСТАВЛЕННУЮ ЗАДАЧУ И ПОРУЧЕНИЕ НАШЕГО ПРЕЗИДЕНТА КАСЫМ-ЖОМАРТА ТОКАЕВА НЕ СЛЫШАТ?"',
            key: '2' ,
        img: 'https://kaskelen.kz/sites/default/files/1611299171.jpg'
        },
        {name: 'Срочные новости!!',
            anons: 'В Шамалгане мужчина изрезал сестру своей жены и остался на свободе\n',
            full: 'Эта девушка не побоялась пьяного дебошира и заступилась за свою старшую сестру, когда муж сестры избивал ее у нее на глазах. Ей всего 19 лет В ответ, мужчина нанес ей множество ножевых ранений, четыре удара в область груди, разрезал лицо, брюшную полость, порезал руки, он ее убивал на глазах сестры! Она попала в больницу и врачи спасли ей жизнь. Девушка потеряла много крови, два дня была без сознания, пострадали жизненно важные органы почки и печень, но благодаря профессионализму врачей ее спасли.\n' +
                '\n' +
                'Преступление совершено 17 августа, дело якобы завели по 106 УК РК, но вы будете удивлены, следователь не сделал ничего, от слова совсем.\n' +
                '\n' +
                'Срок расследования два месяца, сегодня уже 19 октября, но не было никаких допросов, очной ставки, экспертиз, а ПРЕСТУПНИК НА СВОБОДЕ!\n' +
                '\n' +
                'Сестры вынуждены скрываться, опасаясь за свои жизни!\n' +
                '\n' +
                'Уважаемый Серик Кудебаев, почему ваши сотрудники игнорируют тяжкие преступления? Просим принять срочные меры, привлечь к ответственности следователя и взять под стражу опасного для общества гражданина!',
            key: '3',
            img: 'https://kaskelen.kz/sites/default/files/2d3acbe0cd696e30c4d079519aa66fc0_XL.jpg'
        }

        ]
    );

    const [ModalAdd, setModalAdd] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list,
            ]
        })
        setModalAdd(false);
    }

    function ture() {

    }

    return (
        <View style={gStyle.main}>
            <Modal visible={ModalAdd}>
                <AntDesign name="closecircle" size={24}
                           color="black" style={styles.close}
                           onPress={() => setModalAdd(false)}/>
                <View style={gStyle.main}>
                    <Text style={styles.title}>
                        Форма для статьи
                    </Text>
                    <Form addArticle={addArticle}/>
                </View>

            </Modal>
            <MaterialIcons name="post-add" size={24}
                           color="black" style={styles.iconsAdd}
                           onPress={() => setModalAdd(ture)} />
            <Text style={[gStyle.title, styles.header]}>
                Главная страница
            </Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                <Text style={styles.title}>{item.name}</Text>
                    <Image style={styles.image} source ={{uri: item.img}}/>
                    <Text style={styles.anons}>{item.anons}</Text>
                </TouchableOpacity>
                )
            }/>
        </View>
    );

}
const styles = StyleSheet.create ({
    iconsAdd: {
      textAlign: 'right',
      marginBottom: 15,
      color: 'green',
    },
    header: {
        marginBottom: 30,
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        color: '#000000',
    },
    anons: {
        marginBottom : 20,
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'mt-light',

    },
    image: {
        width: '100%',
        height: 200,
    },
    close: {
        textAlign: 'right',
        color: 'red',
        marginTop: 50,
        paddingRight: 10,
    }
})


export default Main
