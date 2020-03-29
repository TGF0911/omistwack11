import 'react-native-gesture-handler'
import React, {useEffect, useState} from 'react'
import { Feather } from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'

import api from '../../services/api'

import styles from './style'

export default function Incident() {
  const [incidents, setIncidents] = useState([]);
  const navigation = useNavigation();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  function navigateToDetail(incident) {
    navigation.navigate('Detail', {incident})
  }

  async function loadInceidents(){
    if(loading){
      return;
    }

    if(total > 0 && incidents.length == total){
      return;
    }

    setLoading(true);


    const res = await api.get('incidents', {
      params : {page}
    })

    setIncidents([...incidents, ...res.data])
    setTotal(res.headers['X-Total-Count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadInceidents();
  }, [])

  return (
    <View style={styles.container}>
      <View> style={styles.header}>
        <Image source={logoImg} />
        <Text style={style.headerText}>
          Total de <Text style={styles.headerTextBold} >{total} casos</Text>

        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

      <FlatList
        style={styles.incidentsList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        data={incidents}
        onEndReached={loadInceidents}
        onEndReachedThreshold={0.2}
        renderItem={({item : incident}) => (
          <View style={styles.Incident}>
            <Text style={style.IncidentProperty}>ONG:</Text>
        <Text style={styles.IncidentValue}>{incident.name}</Text>

            <Text style={style.IncidentProperty}>CASO:</Text>
        <Text style={styles.IncidentValue}>{incident.title}</Text>

            <Text style={style.IncidentProperty}>VALOR:</Text>
        <Text style={styles.IncidentValue}>{Intl.NumberFormat('pt-BR', {style : 'currency', currency : 'BRL' }).format(incident.value)}</Text>

            <TouchableOpacity

              style={style.detailsButton}
              onPress={() => navigateToDetail(incident) }
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />



    </View>

  );
}