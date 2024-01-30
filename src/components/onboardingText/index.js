import { View, Text } from 'react-native'
import React from 'react'

const index = ({splash}) => {
    // console.log("first",splash)
  return (
    <View
            style={{
              marginVertical: '20%',
              paddingHorizontal: '5%',
            }}>
            <Text
              style={{
                fontSize: 33,
                color: 'white',
                fontWeight: 'bold',
              }}>
              {splash === 0
                ? 'Get Started with \nThe Cutting Hub'
                : splash === 1
                ? 'Book Your Favourite \nServices'
                : splash === 2
                ? 'Stay Relax and \nEntertained'
                : 'Never Miss an \nAppointment'}
            </Text>
            <View
              style={{
                marginVertical: '5%',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                {splash === 0
                  ? 'The Ultimate Salon Booking \nExperience.'
                  : splash === 1
                  ? "From haircuts to facials, we've got you \ncovered"
                  : splash === 2
                  ? 'Games, news, and more while you \nwait.'
                  : 'Get appointment reminders and \nupdates in real-time.'}
              </Text>
            </View>
          </View>
  )
}

export default index