import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';


export default function HomeScreen() {
  const categories = ['All', 'Fruits', 'Meat', 'Vegetables', 'Drinks'];
  const counttimes = [count, setCount] = useState(null);
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        {/* <Text style={styles.headerText}>NGO Office page ▼</Text> */}
        <TouchableOpacity style={styles.cartButton}>
          <Feather name="shopping-cart" size={24} color="black" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>X</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hey NGO, Good Afternoon!</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="gray" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search Location, restaurants"
          placeholderTextColor="gray"
        />
      </View>

      {/* Categories */}
      <View style={styles.categoriesSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.categoryButton,
                index === 0 && styles.activeCategoryButton
              ]}
            >
              <Text style={[
                styles.categoryText,
                index === 0 && styles.activeCategoryText
              ]}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Restaurants */}
      <View style={styles.restaurantsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Open Restaurants</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        
        {/* Restaurant Card */}
        <View style={styles.restaurantCard}>
          <View style={styles.restaurantImage} />
          <Text style={styles.restaurantName}>Rose Garden Restaurant</Text>
          <Text style={styles.restaurantCategories}>Burger - Chicken - Rice - Wings</Text>
          <View style={styles.restaurantInfo}>
            <View style={styles.infoItem}>
              <Feather name="star" size={16} color="#FF8C00" />
              <Text> 4.7</Text>
            </View>
            <View style={styles.infoItem}>
              <Feather name="truck" size={16} color="#FF8C00" />
              <Text> 4.5 Kms</Text>
            </View>
            <View style={styles.infoItem}>
              <Feather name="clock" size={16} color="#FF8C00" />
              <Text> 20 min</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  cartButton: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: '#FF8C00',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  categoriesSection: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#FF8C00',
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#F5F5F5',
  },
  activeCategoryButton: {
    backgroundColor: '#FF8C00',
  },
  categoryText: {
    color: 'black',
  },
  activeCategoryText: {
    color: 'white',
  },
  restaurantsSection: {
    marginTop: 20,
  },
  restaurantCard: {
    marginTop: 10,
  },
  restaurantImage: {
    height: 150,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  restaurantCategories: {
    color: 'gray',
    marginTop: 5,
  },
  restaurantInfo: {
    flexDirection: 'row',
    marginTop: 5,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
});