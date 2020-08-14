import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spacer from '../components/Spacer';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  return (
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
            borderColor: 'black',
            borderWidth: 1,
            flexDirection: 'row',
          }}>
          <TextInput
            placeholder="Cari klinik, doktor, dll"
            style={styles.searchField}
            value={search}
            onChangeText={setSearch}
          />
          <View style={{}}>
            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name="search" size={56} />
            </TouchableOpacity>
          </View>
        </View>
      </Spacer>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 16,
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
    fontSize: 40,
    color: '#1E1C61',
  },
  searchField: {
    backgroundColor: '#ECECEE',
    borderRadius: 20,
    padding: 16,
    position: 'absolute',
  },
  searchButton: {
    backgroundColor: 'orange',
    borderRadius: 20,
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
