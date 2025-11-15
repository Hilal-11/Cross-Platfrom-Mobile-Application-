
import { View, StyleSheet , Text } from 'react-native';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native'
import { TextInput } from 'react-native';
export default function AnimatedStyleUpdateExample() {
  const data = [
    {
      id: 1,
      username: "Gowher",
      profilePicture: "https://qph.cf2.quoracdn.net/main-qimg-3faba6134effce33a28abff62d1f227c-lq",
      message: "Hey there! How's it going?",
      timestamp: "10:30 AM"
    },
    {
      id: 2,
      username: "Ahtisham friend",
      profilePicture: "https://i.pinimg.com/736x/9d/8f/32/9d8f328b53f787f915054be191a40b04.jpg",
      message: "Hi! What's up?",
      timestamp: "10:30 AM"
    },
    {
      id: 3,
      username: "Junaid altaf",
      profilePicture: "https://i.pinimg.com/564x/da/92/1a/da921a7568c70a42cf68d9de8f820977.jpg",
      message: "hope you're having a great day!",
      timestamp: "10:30 AM"
    },
    {
      id: 4,
      username: "Asmat ❤️",
      profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8tJKe4DL5I1K8UVysiobN-5yYT3hsIjokyQ&s",
      message: "Want to chat or get straight ",
      timestamp: "10:30 AM"
    },
    {
      id: 5,
      username: "Bisma ⭐",
      profilePicture: "https://photosmint.com/wp-content/uploads/2025/03/boys-whatsapp-dp-images.jpg",
      message: "Hi there! Want to chat or get straight to ",
      timestamp: "10:30 AM"
    },
    {
      id: 6,
      username: "Sana 🌸",
      profilePicture: "https://i.pravatar.cc/150?img=6",
      message: "Hello there! Long time no see.",
      timestamp: "9:12 AM"
    },
    {
      id: 7,
      username: "Arman 🎧",
      profilePicture: "https://i.pravatar.cc/150?img=7",
      message: "Hello there! 👋 Nice to meet you.",
      timestamp: "11:02 AM"
    },
    {
      id: 8,
      username: "Laila ✨",
      profilePicture: "https://i.pravatar.cc/150?img=8",
      message: "Hey — hello there! Ready when you are.",
      timestamp: "4:45 PM"
    },
    {
      id: 9,
      username: "Omar 🚀",
      profilePicture: "https://i.pravatar.cc/150?img=9",
      message: "Hi there! Want to grab coffee later?",
      timestamp: "8:05 AM"
    },
    {
      id: 10,
      username: "Nadia 🌿",
      profilePicture: "https://i.pravatar.cc/150?img=10",
      message: "Hello there — hope you're having a great day!",
      timestamp: "Yesterday"
    },
    {
      id: 11,
      username: "Bilal 🐾",
      profilePicture: "https://i.pravatar.cc/150?img=11",
      message: "Yo! How are things on your end?",
      timestamp: "2:20 PM"
    },
    {
      id: 12,
      username: "Maya 🎨",
      profilePicture: "https://i.pravatar.cc/150?img=12",
      message: "Greetings! How can I help you today?",
      timestamp: "1:10 PM"
    },
    {
      id: 13,
      username: "Rizwan ⚽",
      profilePicture: "https://i.pravatar.cc/150?img=13",
      message: "Hello there 🙂 Any plans for today?",
      timestamp: "12:00 PM"
    },
    {
      id: 14,
      username: "Zara 💫",
      profilePicture: "https://i.pravatar.cc/150?img=14",
      message: "Well hello there — fancy seeing you here!",
      timestamp: "6:30 PM"
    },
    {
      id: 15,
      username: "Hamza 🔆",
      profilePicture: "https://i.pravatar.cc/150?img=15",
      message: "Hello there! Want to chat or get straight to it?",
      timestamp: "3:50 PM"
    }
  ]
  return (
    <View style={styles.constainer}>
      <ScrollView>
        <View style={{
          paddingLeft: 2,
          paddingRight: 2,
          paddingBottom: 10,
          paddingTop: 5,
          backgroundColor: 'white',
        }}>
          <TextInput
            style={{
              height: 50,
              borderRadius: 100,
              paddingLeft: 20,
              borderColor: 'gray',
              backgroundColor: '#f2f2f2',
              fontSize: 18,
              fontWeight: '500',
            }}
            placeholder='Search user:- '
          >
          </TextInput>
        </View>
        {data.map((item) => (
          <View key={item.id} style={styles.userChatItem}>
            <View
              style={{
                paddingLeft: 5,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: '100%',
                height: '100%',
                gap: 10,
                backgroundColor: 'orange ',  
              }}
            >
              <View 
                style={{
                  width:70,
                  height:70,
                  backgroundColor:'gray',
                  borderRadius: "100%",
                }}
              >
                <Image
                  source={item.profilePicture}
                  placeholder={"Hilal"}
                  contentFit="cover"
                  transition={1000}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                  }}
                >
                </Image>
              </View>
              <View style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}>
                  <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '500',
                    color: 'black',
                    marginTop: 6,
                  }}
                >{item.username}</Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '400',
                    color: 'black',
                    paddingTop: 5,
                    paddingLeft: 2,
                  }}
                >{item.message}</Text>
              </View>

            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingTop: 20,
              paddingRight: 10,
            }}>
              <Text style={{ fontSize: 16, color: 'gray' }}>{item.timestamp}</Text>
            </View>


            </View>
        </View>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    constainer:{
        flex:1,
        width:'100%',
        height:'auto',
        paddingTop:5,
    },
    userChatItem: {
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        width: '100%',
        height: 90,
        backgroundColor: 'white',
        paddingTop: 10,
        marginBottom: 2,
    }
})

