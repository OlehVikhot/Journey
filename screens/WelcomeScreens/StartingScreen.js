import { useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, View, Dimensions } from "react-native";
import { PrimaryButton, TextButton, TextInter } from "../../components";
import { colors } from "../../constants/colors";

const infoObj = [
  {
    key: 1,
    header: "Travel around \nthe world",
    description:
      "The whole woels in one application. Make \nyour planning enjoyfull.",
    imgPath: require(`../../assets/images/starting1.png`),
  },
  {
    key: 2,
    header: "Find new \nintresting places",
    description:
      "This is a new level of impressions and \ndiscoveries for you and your friends.",
    imgPath: require(`../../assets/images/starting2.png`),
  },
  {
    key: 3,
    header: "Discover entire \ninformation",
    description:
      "Don'r worry about searchinf information. You \ncan find it easily here.",
    imgPath: require(`../../assets/images/starting3.png`),
  },
];

const { width } = Dimensions.get("window");

export default function StartingScreen({ navigation }) {
  const [activePage, setActivePage] = useState(0);
  const [lastSlide, setLastSlide] = useState(false);

  function skipHandler() {
    navigation.navigate("LogInScreens");
  }

  function onSlideHandler(nativeEvent) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    if (slide <= infoObj.length - 1) {
      setActivePage(slide);
    }

    if (infoObj.length - 1 === slide) {
      setLastSlide(true);
    }
  }

  const scrollRef = useRef();

  function nextSlideHandler() {
    if (activePage === 0) {
      scrollRef.current.scrollTo({ x: 368, y: 0, animated: true });
    }
    if (activePage === 1) {
      scrollRef.current.scrollTo({ x: 736, y: 0, animated: true });
    }
    if (activePage === 2) {
      navigation.navigate("LogInScreens");
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.backContainer}>
        <TextButton text={"Skip"} onPress={skipHandler} />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={({ nativeEvent }) => onSlideHandler(nativeEvent)}
        scrollEventThrottle={0}
        ref={scrollRef}
      >
        {infoObj.map((item, index) => {
          return (
            <View style={styles.slideContainer} key={index}>
              <View>
                <TextInter style={styles.header}>{item.header}</TextInter>
              </View>
              <View style={styles.descriptionContainer}>
                <TextInter style={styles.description}>
                  {item.description}
                </TextInter>
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.imgPath} />
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {infoObj.map((item, key) => {
          return (
            <TextInter
              key={key}
              style={key === activePage ? styles.dot : styles.dotInactive}
            >
              ⬤
            </TextInter>
          );
        })}
      </View>

      <PrimaryButton
        text={lastSlide === true ? "Let's start" : "Next"}
        onPress={nextSlideHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 56,
    paddingHorizontal: 23,
    flexDirection: "column",
  },
  backContainer: {
    alignItems: "flex-end",
  },
  slideContainer: {
    marginTop: 50,
    marginBottom: 87,
    width: width - 46,
  },
  header: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
  },
  descriptionContainer: {
    marginTop: 14,
  },
  description: {
    fontSize: 14,
  },
  imageContainer: {
    marginTop: 26,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    height: 365,
    width: "100%",
    // resizeMode: "contain",
  },
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    width: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },
  dot: {
    color: colors.primaryOrange,
    fontSize: 12,
    spaceBetween: 10,
  },
  dotInactive: {
    color: colors.disabledOrange,
    fontSize: 8,
  },
});
