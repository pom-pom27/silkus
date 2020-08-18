import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spacer from '../components/Spacer';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CardCategories from '../components/CardCategories';
import CardClinic from '../components/CardClinic';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const categoryData = [
    {
      id: '1',
      title: 'Dental Surgeon',
      imagePath: require('../assets/gigi.png'),
      color: '#4B7FFB',
    },
    {
      id: '2',
      title: 'Heart Surgeon',
      imagePath: require('../assets/heart.png'),
      color: '#FFB167',
    },
    {
      id: '3',
      title: 'Eye Surgeon',
      imagePath: require('../assets/mata.png'),
      color: '#F57E71',
    },
  ];

  const separator = () => <View style={{ paddingHorizontal: 16 }}></View>;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="menu" size={40} />
          <Image
            style={styles.profileImage}
            source={require('../assets/profile.png')}
          />
        </View>
        <Spacer>
          <Text style={styles.titleText}>Find Your Desired Doctor</Text>
        </Spacer>
        <Spacer>
          <View
            style={{
              // borderColor: 'black',
              // borderWidth: 1,
              flexDirection: 'row',
            }}>
            <TextInput
              placeholder="Cari klinik, doktor, dll"
              style={styles.searchField}
              value={search}
              onChangeText={setSearch}
            />

            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name="search" color="white" size={56} />
            </TouchableOpacity>
          </View>
        </Spacer>
        <Spacer>
          <Text style={styles.categories}>Categories</Text>
        </Spacer>

        <View style={{}}>
          <FlatList
            horizontal
            data={categoryData}
            contentContainerStyle={{
              paddingHorizontal: 16,
            }}
            renderItem={({ item }) => (
              <CardCategories
                title={item.title}
                imagePath={item.imagePath}
                color={item.color}
              />
            )}
            ItemSeparatorComponent={separator}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Spacer>
          <Text style={styles.categories}>Top Doctor</Text>
        </Spacer>

        <Spacer>
          <CardClinic />
        </Spacer>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginRight: 1,
  },
  titleText: {
    marginTop: 44,
    marginBottom: 14,
    fontWeight: 'bold',
    fontSize: 35,
    color: '#1E1C61',
  },
  searchField: {
    backgroundColor: '#ECECEE',
    borderRadius: 20,
    padding: 16,
    marginBottom: 10,
    flex: 1,
  },
  searchButton: {
    backgroundColor: 'orange',
    borderRadius: 20,
  },
  categories: {
    marginVertical: 16,
    fontSize: 18,
    color: '#1E1C61',
    fontWeight: 'bold',
  },
});

// const SearchFeature = () => {
//   return (
//     <View
//       style={{
//         paddingTop: 15,
//         marginHorizontal: 17,
//         flexDirection: 'row',
//         marginBottom: 15,
//       }}>
//       <View style={{ position: 'relative', flex: 1 }}>
//         <TextInput
//           placeholder="What do you want eat?"
//           style={{
//             borderWidth: 1,
//             borderColor: '#E8E8E8',
//             borderRadius: 25,
//             height: 40,
//             fontSize: 13,
//             paddingLeft: 45,
//             paddingRight: 20,
//             backgroundColor: 'white',
//             marginRight: 18,
//           }}
//         />
//         <Image
//           style={{ position: 'absolute', top: 5, left: 12 }}
//           source={require('../../../assets/icon/search.png')}
//         />
//       </View>
//       <View
//         style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
//         <Image source={require('../../../assets/icon/promo.png')} />
//       </View>
//     </View>
//   );
// };
