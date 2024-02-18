import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import ImageBackground from '../../components/imageBackground';
import Review from '../../components/review';
import Services from '../../components/services';
import Info from '../../components/info';

const Shop = () => {
  const [button, setButton] = useState('info');
  console.log('button', button);

  const data = [
    {
      id: 0,
      title: "Men's Haircut",
      price: '500Rs',
      details: 'All prices include taxes\nSkin fade add 150Rs',
      time: '30 minutes',
    },
    {
      id: 1,
      title: 'Youth Cut',
      price: '400Rs',
      details: 'Between 13 to 17 years of age\nSkin fade add 150Rs',
      time: '30 minutes',
    },
    {
      id: 2,
      title: 'Children Cut',
      price: '350Rs',
      details: '12 years and younger',
      time: '20 minutes',
    },
    {
      id: 3,
      title: "Senior's Cut",
      price: '400Rs',
      details: '65 years and older',
      time: '30 minutes',
    },
    {
      id: 4,
      title: 'Buzz Cut',
      price: '400Rs',
      details: 'Skin fade add 150Rs',
      time: '20 minutes',
    },
    {
      id: 5,
      title: 'Buzz Cut & Beard Trim',
      price: '700Rs',
      details: 'All prices include taxes\nSkin fade add 150Rs',
      time: '35 minutes',
    },
    {
      id: 6,
      title: 'Haircut & Beard Trim',
      price: '100Rs',
      details: 'All prices include taxes\nSkin fade add 150Rs',
      time: '45 minutes',
    },
  ];
  const newData = [
    {id: 0, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Monday :'},
    {id: 1, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Tuesday :'},
    {id: 2, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Wednesday :'},
    {id: 3, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Thursday :'},
    {id: 4, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Friday :'},
    {id: 5, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Saturday :'},
    {id: 6, openTime: '10:00 AM', closeTime: '12:00 AM', day: 'Sunday :'},
  ];
  const review = [
    {
      id: 0,
      profileName: 'Sid Da Silva',
      profileSymbol: 'S',
      stars: require('../../assets/starIcon.png'),
      comment: 'Very good always a great cut',
    },
    {
      id: 1,
      profileName: 'Ash Kurd',
      profileSymbol: 'A',
      stars: require('../../assets/starIcon.png'),
      comment: 'Best Experience',
    },
    {
      id: 2,
      profileName: 'George Lovell',
      profileSymbol: 'G',
      stars: require('../../assets/starIcon.png'),
      comment: 'I like it very.',
    },
    {
      id: 3,
      profileName: 'Alessandro Anzaldi',
      profileSymbol: 'A',
      stars: require('../../assets/starIcon.png'),
      comment: 'Excellent service',
    },
    {
      id: 4,
      profileName: 'Patrick Quelhas',
      profileSymbol: 'P',
      stars: require('../../assets/starIcon.png'),
      comment: 'Best Haircut i will come again',
    },
    {
      id: 5,
      profileName: 'Michael Cardoso',
      profileSymbol: 'M',
      stars: require('../../assets/starIcon.png'),
      comment: 'Proffesional haircut',
    },
    {
      id: 6,
      profileName: 'Luca Fathollazadeh',
      profileSymbol: 'S',
      stars: require('../../assets/starIcon.png'),
      comment: 'Gorgeous,Brilliant services',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <ImageBackground
        onPress={() => {
          setButton('info');
        }}
        onPressServices={() => {
          setButton('onPressServices');
        }}
        onPressReview={() => {
          setButton('onPressReview');
        }}
      />
      {button === 'info' ? (
        <View
          style={{
            width: '95%',
            borderRadius: 10,
            backgroundColor: '#fff',
            marginTop: 5,
            height: 280,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <View
            style={{
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                fontWeight: '700',
              }}>
              ADDRESS & HOURS
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'black',
              }}>
              Mr Cutts
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '300',
                color: 'black',
              }}>
              Block F,PIA Housing Scheme,{'\n'}Lahore,Punjab
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 10,
            }}>
            <FlatList
              data={newData}
              renderItem={({item}) => {
                return (
                  <Info
                    day={item.day}
                    openTime={item.openTime}
                    closeTime={item.closeTime}
                  />
                );
              }}
            />
          </View>
        </View>
      ) : button === 'onPressServices' ? (
        <View
          style={{
            width: '95%',
            borderRadius: 10,
            marginTop: 5,
            height: '100%',
          }}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <Services
                  time={item.time}
                  price={item.price}
                  title={item.title}
                  details={item.details}
                />
              );
            }}
          />
        </View>
      ) : (
        <View>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '700',
                }}>
                REVIEWS
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '700',
                }}>
                ADD REVIEW
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={review}
              renderItem={({item}) => {
                return (
                  <Review
                    stars={item.stars}
                    comment={item.comment}
                    profileName={item.profileName}
                    profileSymbol={item.profileSymbol}
                  />
                );
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Shop;
