import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';

const BookNow = () => {
  const [internalDate, setInternalDate] = useState(new Date());
  const [allDatesInMonth, setAllDatesInMonth] = useState([]);

  useEffect(() => {
    const currentMonth = internalDate.getMonth();
    const currentYear = internalDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const datesArray = Array.from(
      {length: daysInMonth},
      (_, index) => new Date(currentYear, currentMonth, index + 1),
    );
    const currentDate = new Date();
    if (currentDate >= internalDate) {
      datesArray.unshift(currentDate);
    }
    const filteredDates = datesArray.filter(date => date >= new Date());

    setAllDatesInMonth(filteredDates);
  }, [internalDate]);

  console.log('allDatesInMonth', allDatesInMonth);

  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 30,
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          marginTop: 5,
          width: '95%',
          backgroundColor: 'white',
          height: 169,
          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <View
          style={{
            // backgroundColor: 'blue',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/profile2.jpeg')}
            style={{
              height: 145,
              width: 145,
              borderRadius: 10,
              marginLeft: 11,
            }}
          />
          <View
            style={{
              width: '30%',
              alignItems: 'center',
              marginVertical: 10,
              justifyContent: 'space-between',
              marginHorizontal: 33,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: 'black',
                textAlign: 'center',
                marginLeft: 20,
              }}>
              Usman{'\n'}
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '300',
                  color: 'black',
                }}>
                Barber
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 40,
              }}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 90,
                  backgroundColor: '#F5F5F5',
                  // marginLeft:10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginRight: 20,
                }}>
                <Image
                  source={require('../../assets/phoneIcon.png')}
                  style={{
                    height: 27,
                    width: 27,
                  }}
                />
                <Text>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 90,
                  backgroundColor: '#F5F5F5',
                  // marginLeft:10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/whatsappIcon.png')}
                  style={{
                    height: 38,
                    width: 38,
                  }}
                />
                <Text>Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: 'red',
          height: 30,
          width: '95%',
          marginVertical: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 20,
          paddingLeft: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '500',
            marginLeft: 5,
          }}>
          Customers
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '500',
            marginRight: 15,
          }}>
          Experience
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '500',
            marginRight: 10,
          }}>
          Ratings
        </Text>
      </View>
      <View
        style={{
          height: 60,
          width: '95%',
          // backgroundColor: 'black',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 115,
            height: 60,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#2158FF',
            }}>
            150+
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: 115,
            height: 60,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#2158FF',
            }}>
            3 years
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: 115,
            height: 60,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/starIcon.png')}
            style={{
              height: 18,
              width: 18,
              marginRight: 5,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#2158FF',
            }}>
            4.7
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '95%',
          marginVertical: 15,
        }}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            fontWeight: '600',
          }}>
          Schedule
        </Text>
      </View>
      <View>
        <FlatList
          data={allDatesInMonth}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.toString()}
              onPress={() => {
                console.log('item', item);
              }}
              style={{
                height: 74,
                width: 78,
                backgroundColor: '#BBE4FB',
                borderRadius: 15,
                marginHorizontal: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 19,
                  color: 'black',
                }}>
                {
                  item
                    .toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'long',
                    })
                    .split(' ')[1]
                }
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: 'black',
                }}>
                {
                  item
                    .toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'long',
                    })
                    .split(' ')[0]
                }
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default BookNow;
