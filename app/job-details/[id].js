import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, Sizes, icons } from '../../constants';
import useFetch from '../../hooks/useFetch';

const jobDetails = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    console.log(params)
    const { data, isLoading, error, refetch } = useFetch('job-details', { job_id: params.id });

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => { }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"
                        />
                    ),
                    headerTitle: ''
                }}
            />
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl
                    refreshing={refreshing} onRefresh={onRefresh} />}>

                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default jobDetails