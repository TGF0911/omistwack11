import 'react-native-gesture-handler'
import React from 'react'
import { Feather } from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, TouchableOpacity, Text, Image, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'


import styles from './style'

import logoImg from '../../assets/logo.png'

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident
    const message = `Olá ${incident.name}, estou entando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style : 'currency', currency : 'BRL'}).format(incident.value)}}`

  function navigateBack() {
    navigation.goBack();
  }

  function sendEmail() {
    //yarn add expo-mail-composer (funciona com apps sem expo)

    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })

  }

  function sendWhatsApp() {
    //isso serve para tds as apps do celular 
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View> style={styles.header}>
      <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E02141" />
        </TouchableOpacity>

      </View>

      <View style={styles.incident}>
        <Text style={[style.IncidentProperty, { marginTop: 0 }]}>ONG:</Text>
  <Text style={styles.IncidentValue}>{incident.name} de {incident.cidade}/{incident.uf}</Text>

        <Text style={style.IncidentProperty}>CASO:</Text>
        <Text style={styles.IncidentValue}>{incident.title}</Text>

        <Text style={style.IncidentProperty}>VALOR:</Text>
        <Text style={styles.IncidentValue}>{Intl.NumberFormat('pt-BR', {style : 'currency', currency : 'BRL' }).format(incident.value)}</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription} >Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>

  );
}