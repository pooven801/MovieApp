import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  FlatList,
} from 'react-native';
import * as Services from '@services';
import {ListItem} from '@components';
import styles from './styles';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    api_key: '328c283cd27bd1877d9080ccb1604c91',
    primaryReleaseDate: '2016-12-31',
    sort_by: 'release_date.desc',
    page: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [loadMore, setLoadMore] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const [currentSort, setCurrentSort] = useState('release_date.desc');

  useEffect(() => {
    Services.getList(
      `api_key=${params.api_key}&primary_release_date.lte=${params.primaryReleaseDate}&sort_by=${currentSort}&page=${params.page}`,
    ).then(res => {
      setData([...res.results]);
      setTotalPages(res.total_pages);
    });
  }, [currentSort]);

  const renderItem = item => {
    return (
      <ListItem
        item={item}
        imageThumb={item.item.backdrop_path}
        title={item?.item?.title}
        popularity={item?.item?.popularity}
        onPress={() => {
          navigation.navigate('Detail', {id: item.item.id});
        }}
      />
    );
  };

  const onRefresh = () => {
    Services.getList(
      `api_key=${params.api_key}&primary_release_date.lte=${params.primaryReleaseDate}&sort_by=${currentSort}&page=${params.page}`,
    ).then(res => {
      setData(res.results);
      setTotalPages(res.total_pages);
      setIsFetching(false);
    });
  };

  const onLoadMore = () => {
    let tempPage = currentPage;
    setLoadMore(true);
    if (tempPage) {
      tempPage++;
    } else {
      tempPage = 1;
      tempPage++;
    }
    if (tempPage > totalPages) return;
    setCurrentPage(tempPage);
    getMoreListing(tempPage);
  };

  const getMoreListing = tempPage => {
    setLoadMore(true);
    Services.getList(
      `api_key=${params.api_key}&primary_release_date.lte=${params.primaryReleaseDate}&sort_by=${currentSort}&page=${tempPage}`,
    ).then(res => {
      setData([...data, ...res.results]);
      setTotalPages(res.total_pages);
      setLoadMore(false);
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => setOpenSort(!openSort)}>
          <Text style={{color: 'white', fontSize: 15, padding: 5}}>
            Sort By:{' '}
            {currentSort == 'release_date.desc'
              ? 'Release Date'
              : currentSort == 'title.desc'
              ? ' A-Z'
              : 'Rating'}
          </Text>
        </TouchableOpacity>

        {openSort && (
          <View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#262626',
                width: '100%',
                marginVertical: 5
              }}></View>
            <TouchableOpacity
              style={[
                currentSort == 'release_date.desc' && {
                  backgroundColor: '#262626',
                },
              ]}
              onPress={() => {
                setOpenSort(false);
                setCurrentSort('release_date.desc');
              }}>
              <Text style={{color: 'white', fontSize: 15, padding: 5}}>
                Release Date
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                currentSort == 'title.desc' && {
                  backgroundColor: '#262626',
                },
              ]}
              onPress={() => {
                setOpenSort(false);
                setCurrentSort('title.desc');
              }}>
              <Text style={{color: 'white', fontSize: 15, padding: 5}}>
                A-Z
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                currentSort == 'vote_average.desc' && {
                  backgroundColor: '#262626',
                },
              ]}
              onPress={() => {
                setOpenSort(false);
                setCurrentSort('vote_average.desc');
              }}>
              <Text style={{color: 'white', fontSize: 15, padding: 5}}>
                Rating
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <FlatList
        data={data}
        onRefresh={() => {
          setIsFetching(true);
          onRefresh();
        }}
        refreshing={isFetching}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.5}
        onEndReached={() => {
          if (data && !loadMore && (currentPage ?? 1) < totalPages) {
            onLoadMore();
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
