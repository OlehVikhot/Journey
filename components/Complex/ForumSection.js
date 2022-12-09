import { Image, StyleSheet, View } from "react-native";
import { TextButton } from "../UI/TextButton";
import { TextInter } from "../Layout/TextInter";
import { colors } from "../../constants/colors";

const COMMENTSDUMMY = [
  {
    userId: 1,
    text: " The best place on the world. Recommend you very much, i like it so much...",
    byName: "Jesica",
    date: "22.02/22",
  },
  {
    userId: 2,
    text: " The best place on the world. Recommend you very much, i like it so much...",
    byName: "Jesica",
    date: "22.02/22",
  },
];

export function Comment({ text, byName, date }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.commentTextContainer}>
        <TextInter style={styles.commentText}>{text}</TextInter>
      </View>
      <View style={styles.byContainer}>
        <View style={styles.imageByContainer}>
          <Image
            style={styles.img}
            source={require(`../../assets/images/starting1.png`)}
          />
          <TextInter style={styles.byText}>by {byName}</TextInter>
        </View>
        <View>
          <TextInter style={styles.dateText}>{date}</TextInter>
        </View>
      </View>
    </View>
  );
}

export function ForumSection({ commetnsArr }) {
  return (
    <View>
      <TextInter style={styles.forumName}>Forum</TextInter>
      {COMMENTSDUMMY.map((comment, index) => {
        return (
          <Comment
            key={index}
            text={comment.text}
            byName={comment.byName}
            date={comment.date}
          />
        );
      })}
      <View style={styles.viewMore}>
        <TextButton text={"View more comments"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forumName: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    marginBottom: 12,
  },
  mainContainer: {
    marginBottom: 12,
  },
  commentTextContainer: {
    marginBottom: 8,
  },
  commentText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  byContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageByContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 20,
    height: 20,
    borderRadius: 200,
    marginRight: 10,
  },
  byText: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    color: colors.gray3,
  },
  dateText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: colors.gray3,
  },
  viewMore: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
