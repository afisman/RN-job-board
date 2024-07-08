import { useState } from 'react';
import { View, Text, Pressable, FlatList, ActivityIndicator } from 'react-native';
import styles from './popularjobs.style';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hooks/useFetch';


const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search', { query: 'React developer', num_pages: 10 });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <Pressable>
          <Text style={styles.headetBtn}>
            Show all
          </Text>
        </Pressable>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ?
          (
            <ActivityIndicator size="large" colors={COLORS.primary} />
          )
          : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList
              data={data.slice(0, 10)}
              renderItem={({ item }) => (
                <PopularJobCard
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
            />
          )

        }
      </View>
    </View>
  )
}

export default Popularjobs;