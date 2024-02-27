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
import moment from 'moment';
import CustomButton from '../../components/customButton';

const BookNow = () => {
  const [internalDate, setInternalDate] = useState(new Date());
  const [allDatesInMonth, setAllDatesInMonth] = useState([]);
  const [allTimesInMonth, setAllTimesInMonth] = useState([]);

  function getHalfHourTimeSlots() {
    const timeFormat = 'HH:mm';
    const currentTime = moment('00:00', timeFormat);
    const endTime = moment('23:59', timeFormat);
    const timeSlots = [];

    while (currentTime.isSameOrBefore(endTime)) {
      timeSlots.push(currentTime.format(timeFormat));
      currentTime.add(30, 'minutes');
    }

    return timeSlots;
  }
  const timeSlots = getHalfHourTimeSlots();
  console.log(timeSlots);

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

  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 50,
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          marginTop: 5,
          maxWidth: '100%',
          marginHorizontal: 10,
          backgroundColor: 'white',
          height: '20%',
          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: '95%',
            width: '100%',
          }}>
          <Image
            source={require('../../assets/profile2.jpeg')}
            style={{
              height: '90%',
              width: '40%',
              borderRadius: 10,
              marginLeft: '3%',
              marginTop: '2%',
            }}
          />
          <View
            style={{
              width: '55%',
              paddingHorizontal: 15,
              paddingVertical: 20,
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
                marginTop: '20%',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: '5%',
              }}>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '50%',
                  backgroundColor: '#F5F5F5',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../assets/phoneIcon.png')}
                  style={{
                    height: 27,
                    width: 27,
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                  }}>
                  Call
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '50%',
                  backgroundColor: '#F5F5F5',
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
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                  }}>
                  Call
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: 'red',
          height: '4%',
          width: '95%',
          marginVertical: '6%',
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
          height: '8%',
          width: '95%',
          // backgroundColor: 'black',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '30%',
            height: '90%',
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
            width: '30%',
            height: '90%',
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
            width: '30%',
            height: '90%',
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
          marginVertical: '5%',
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
      <View
        style={{
          // backgroundColor: 'black',
          height: '10%',
          width: '95%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={allDatesInMonth}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.toString()}
              onPress={() => {
                console.log('item', item);
              }}
              style={{
                height: '90%',
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
      <View
        style={{
          width: '95%',
          // backgroundColor: 'orange',
          height: 30,
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 23,
            color: 'black',
            fontWeight: '600',
          }}>
          Time
        </Text>
      </View>
      <View
        style={{
          height: 80,
          width: '95%',
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={timeSlots}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.toString()}
              onPress={() => {
                console.log('item', item);
              }}
              style={{
                height: '90%',
                width: 78,
                backgroundColor: '#BBE4FB',
                borderRadius: 15,
                marginHorizontal: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor:'black',
          marginVertical: '15%',
          justifyContent: 'space-evenly',
          width: '95%',
        }}>
        <CustomButton
          width={159}
          text={'Back'}
          btnColor={'white'}
          justi={'center'}
          txtColor={'black'}
        />
        <CustomButton
          width={159}
          text={'Next'}
          btnColor={'#2158FF'}
          justi={'center'}
          txtColor={'white'}
        />
      </View>
    </View>
  );
};

export default BookNow;
