import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProjectComponent from '../components/project/projectComponent'

export default function ProjectScreen() {
  return (
    
      <ScrollView>
        <View>
      <ProjectComponent title="Home"/>
      <ProjectComponent title="Commercials"/>
      <ProjectComponent  title="Plots"/>
      <ProjectComponent title="Apartments"/>
      </View>
      </ScrollView>
    
  )
}