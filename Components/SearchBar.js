import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import {View,Text} from 'react-native';

export const SearchBarComp = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
console.log(searchQuery,'000000000000000000000000')
  return (
    <View>
      <Searchbar
        placeholder="Search by Name"
        onChangeText={onChangeSearch} 
        value={searchQuery}
      />
    </View>
  );
};
