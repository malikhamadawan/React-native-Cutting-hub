/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';

const Home = () => {
  const newData = [
    {
      image: require('../../assets/p1.png'),
      title: 'Hair Cut',
    },
    {
      image: require('../../assets/p2.png'),
      title: 'Coloring',
    },
    {
      image: require('../../assets/p3.png'),
      title: 'Spa',
    },
    {
      image: require('../../assets/p4.png'),
      title: 'Makeup',
    },
    {
      image: require('../../assets/p5.png'),
      title: 'Styling',
    },
    {
      image: require('../../assets/p6.png'),
      title: 'Nails',
    },
  ];
  const newData2 = [
    {
      image: require('../../assets/offers1.png'),
      time: 'Limited time',
      discount: '40%',
    },
    {
      image: require('../../assets/offers2.png'),
      time: 'Unlimited time',
      discount: '30%',
    },
  ];
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 49 : 5,
        flex: 1,
        backgroundColor: '#F5F5F5',
        marginHorizontal: '3%',
        // backgroundColor: 'red',
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          // backgroundColor: 'red',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/profile1.png')}
            style={{
              height: 60,
              width: 60,
              marginTop: 5,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '600',
                color: 'black',
                marginLeft: 10,
              }}>
              Hi, John
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../assets/mapIcon.png')}
                style={{
                  height: 12,
                  width: 12,
                  marginLeft: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginLeft: 3,
                }}>
                52WQ+2X5, New South Wales
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 45,
            width: 45,
            backgroundColor: 'white',
            borderRadius: 12,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/bellIcon1.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          height: 40,
          width: '100%',
          alignSelf: 'center',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: 'white',
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Image
          source={require('../../assets/magniferIcon.png')}
          style={{
            height: 16,
            width: 16,
            marginLeft: 5,
          }}
        />
        <TextInput
          style={{
            width: '85%',
            height: 40,
            marginLeft: 7,
            fontSize: 12,
          }}
          placeholder="Search “Salon, Specialist...”"
          placeholderTextColor={'grey'}
        />
        <Image
          source={require('../../assets/icons5.png')}
          style={{
            height: 16,
            width: 16,
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'orange',
          marginTop: 5,
        }}>
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
            // backgroundColor: 'red',
          }}
          horizontal={true}
          data={newData}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                width: 65,
                height: 80,
                alignItems: 'center',
                // backgroundColor: 'red',
              }}>
              <Image
                source={item.image}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 30,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '400',
                  marginVertical: 5,
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          // backgroundColor: 'blue',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '300',
            color: '#0D1230',
          }}>
          #SpecialOffers
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'orange',
          marginTop: 10,
        }}>
        <FlatList
          horizontal={true}
          data={newData2}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginHorizontal: 3,
              }}>
              <ImageBackground
                source={item.image}
                imageStyle={{borderRadius: 15}}
                style={{
                  height: 180,
                  width: 320,
                }}>
                <View
                  style={{
                    backgroundColor: '#BBE4FB',
                    height: 20,
                    width: 83,
                    borderRadius: 9,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 9,
                    marginLeft: 9,
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      color: '#0D1230',
                    }}>
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    // backgroundColor: 'red',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 19,
                      color: '#FAFAFA',
                    }}>
                    Get Special Discount
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      marginLeft: 10,
                      marginTop: 3,
                      width: 50,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#FAFAFA',
                      }}>
                      Up to
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 7,
                    }}>
                    <Text
                      style={{
                        fontSize: 28,
                        color: '#FAFAFA',
                      }}>
                      {item.discount}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#2158FF',
                    height: 28,
                    width: 70,
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    justifyContent: 'center',
                    marginRight: 15,
                    marginTop: 25,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#FAFAFA',
                    }}>
                    Claim
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
