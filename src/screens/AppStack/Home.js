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
  ScrollView,
} from 'react-native';
import React from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
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
      image: require('../../assets/images2.jpeg'),
      time: 'Limited time',
      discount: '40%',
    },
    {
      image: require('../../assets/images6.jpeg'),
      time: 'Unlimited time',
      discount: '30%',
    },
    {
      image: require('../../assets/backGround3.png'),
      time: 'Limited time',
      discount: '15%',
    },
    {
      image: require('../../assets/images5.jpeg'),
      time: 'Limited time',
      discount: '20%',
    },
  ];
  const newData3 = [
    {
      Id: 0,
      image: require('../../assets/vickyhairsalon.jpg'),
      shop: 'Vicky’s hair saloon',
      location: 'Block P Phase 2 Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 1,
      image: require('../../assets/downTown.jpeg'),
      shop: 'Downtown hair saloon',
      location: '871-R1, Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 2,
      image: require('../../assets/barberCompany.jpeg'),
      shop: 'The Barber Company | TBC',
      location: 'Wapda, 391, D3, town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 3,
      image: require('../../assets/masterCuts.jpeg'),
      shop: 'Master Cuts',
      location: 'Kashmir Block Allama Iqbal Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 4,
      image: require('../../assets/HaiderSalon.jpeg'),
      shop: 'Haider Salon',
      location: 'Township Block 3 Twp Sector C 1 Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 5,
      image: require('../../assets/mrCuts.jpeg'),
      shop: 'Mr Cut Hair Saloon',
      location: 'Block F Pia Housing Scheme, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      Id: 0,
      image: require('../../assets/vickyhairsalon.jpg'),
      shop: 'Vicky’s hair saloon',
      location: 'Block P Phase 2 Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 1,
      image: require('../../assets/downTown.jpeg'),
      shop: 'Downtown hair saloon',
      location: '871-R1, Johar Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 2,
      image: require('../../assets/barberCompany.jpeg'),
      shop: 'The Barber Company | TBC',
      location: 'Wapda, 391, D3, town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 3,
      image: require('../../assets/masterCuts.jpeg'),
      shop: 'Master Cuts',
      location: 'Kashmir Block Allama Iqbal Town, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
    {
      id: 4,
      image: require('../../assets/HaiderSalon.jpeg'),
      shop: 'Haider Salon',
      location: 'Township Block 3 Twp Sector C 1 Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Close',
    },
    {
      id: 5,
      image: require('../../assets/mrCuts.jpeg'),
      shop: 'Mr Cut Hair Saloon',
      location: 'Block F Pia Housing Scheme, Lahore',
      timing: '10:00-Am to 12:00-Pm',
      status: 'Open',
    },
  ];
  return (
    // <ImageBackground
    // source={require('../../assets/back.png')}>
    <ScrollView
      contentContainerStyle={{
        marginTop: Platform.OS === 'ios' ? 49 : 5,
        flexGrow: 1,
        // backgroundColor: '#F5F5F5',
        marginHorizontal: '3%',
        paddingBottom: 80,
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
            source={require('../../assets/umair1.jpg')}
            style={{
              height: 60,
              width: 60,
              marginTop: 5,
              borderRadius: 100,
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
              Hi, Umair
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
            shadowOpacity: 10,
            shadowColor: '#808080',
            shadowOffset: {
              width: 4,
              height: 5,
            },
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
          showsHorizontalScrollIndicator={false}
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
                shadowColor: '#808080',
                shadowOpacity: 10,
                shadowOffset: {
                  width: 4,
                  height: 5,
                },
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
          shadowColor: '#808080',
          shadowOpacity: 10,
          shadowOffset: {
            width: 4,
            height: 5,
          },
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
          // paddingBottom: 10,
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{borderRadius: 15}}
          data={newData2}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                marginBottom: 10,
                shadowColor: '#808080',
                shadowOpacity: 10,
                shadowOffset: {
                  width: 4,
                  height: 5,
                },
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
      <View
        style={{
          // backgroundColor: 'blue',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 10,
          shadowColor: '#808080',
          shadowOpacity: 10,
          shadowOffset: {
            width: 4,
            height: 5,
          },
        }}>
        <Text
          style={{
            fontSize: 23,
            color: '#0D1230',
            fontWeight: '600',
          }}>
          Upcoming Schedule
        </Text>
        <TouchableOpacity
          style={{
            height: 26,
            width: 26,
            backgroundColor: '#FFFFFF',
            borderRadius: 6,
            justifyContent: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/Icons6.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require('../../assets/box.png')}
        style={{
          height: 180,
          width: 370,
          // width: '100%',
          marginTop: 15,
          // flexDirection: 'row',
          // backgroundColor: '#FFFFFF',
          borderRadius: 15,
          shadowColor: '#808080',
          shadowOpacity: 10,
          shadowOffset: {
            width: 4,
            height: 5,
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: '#FFFFFF',
            width: '100%',
            justifyContent: 'space-around',
            borderRadius: 12,

            // backgroundColor: 'blue',
          }}>
          <View
            style={{
              height: '45%',
              width: '75%',
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../assets/profile1.png')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 80,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: '600',
                  color: '#0D1230',
                  marginTop: 7,
                  marginLeft: 7,
                }}>
                InStyle Stylizt
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#0D1230',
                  marginLeft: 7,
                  marginTop: 7,
                }}>
                John Smith
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '300',
                  color: '#737687',
                  marginLeft: 7,
                }}>
                Barber
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              backgroundColor: '#BBE4FB',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Image
              source={require('../../assets/phoneIcon1.png')}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            height: '25%',
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 16,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              // backgroundColor: 'red',
              width: '50%',
            }}>
            <Image
              source={require('../../assets/calendarIcon.png')}
              style={{
                height: 24,
                width: 24,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                fontSize: 13,
                color: '#363A53',
                marginLeft: 10,
              }}>
              Monday, 26 May
            </Text>
          </View>
          <Image
            source={require('../../assets/Icons7.png')}
            style={{
              height: 24,
              width: 2,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              // backgroundColor: 'red',
              width: '50%',
            }}>
            <Image
              source={require('../../assets/clockIcon.png')}
              style={{
                height: 24,
                width: 24,
                marginLeft: 25,
              }}
            />
            <Text
              style={{
                fontSize: 13,
                color: '#363A53',
                marginLeft: 10,
              }}>
              09:00 - 10:00
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          shadowColor: '#808080',
          shadowOpacity: 10,
          shadowOffset: {
            width: 4,
            height: 5,
          },
        }}>
        <Text
          style={{
            fontSize: 26,
            color: '#0D1230',
            fontWeight: '600',
          }}>
          Popular Shops near you
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: '#2158FF',
          }}>
          More
        </Text>
      </View>
      <View style={{borderRadius: 15}}>
        {newData3.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              marginVertical: 10,
              elevation: 5,
            }}>
            <ImageBackground
              source={item.image}
              imageStyle={{borderRadius: 15}}
              style={{
                height: 180,
                elevation: 5,
                width: '100%',
                shadowColor: '#808080',
                shadowOpacity: 10,
                shadowOffset: {
                  width: 4,
                  height: 5,
                },
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                }}>
                <Text
                  style={{
                    fontSize: 19,
                    color: 'white',
                    fontWeight: '700',
                    elevation: 5,
                    shadowOpacity: 10,
                    shadowOffset: {
                      width: 4,
                      height: 5,
                    },
                  }}>
                  {item.shop}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#FAFAFA',
                  }}>
                  {item.location}
                </Text>
                <View
                  style={{
                    width: 50,
                    height: 20,
                    backgroundColor: item.status === 'Close' ? 'red' : 'green',
                    borderRadius: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#fff',
                    }}>
                    {item.status}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
    // </ImageBackground>
  );
};

export default Home;
