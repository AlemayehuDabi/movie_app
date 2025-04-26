import {
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "@/component/AppText";

export default function MovieDetails() {
  // Get screen dimensions
  const { width, height } = Dimensions.get("window");

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        <View>
          <Image
            source={require("../../assets/images/images.jpg")}
            style={{ width: width, height: height / 2 }} // Full width, 1/3 of screen height
            resizeMode="stretch"
          />
          <TouchableOpacity className="absolute -bottom-5 right-5 rounded-full w-14 h-14  flex items-center justify-center border  p-4">
            <Ionicons name="play" color="white" size={26} />
          </TouchableOpacity>
        </View>
        {/* middle components */}
        <View className="px-5 mt-6">
          {/* movie detail */}
          <View className="flex-col gap-5">
            <View className="flex-col">
              <AppText className=" text-2xl font-semibold ">
                Squid Game 2
              </AppText>
              <View className="flex-row gap-4">
                <AppText className="tracking-wider text-gray-500 text-main">
                  2024
                </AppText>
                <AppText className="tracking-wider text-gray-500 text-main">
                  PG-13
                </AppText>
                <AppText className="tracking-wider text-gray-500 text-main">
                  2h 46m
                </AppText>
              </View>
            </View>
            {/* rating */}
            <View className="flex-row gap-3">
              <View className="px-3 py-2 border-primary_100 bg-primary_100 rounded-md">
                <AppText>
                  <Ionicons name="star" size={10} className="p-1" />{" "}
                  8.9/10(200K)
                </AppText>
              </View>
              <View className="flex-row justify-center items-center px-3 py-2 border-primary_100 bg-primary_100 rounded-md">
                <Ionicons
                  name="trending-up-outline"
                  size={20}
                  className="mr-2"
                  color="white"
                />
                <AppText className="">1</AppText>
              </View>
            </View>

            {/* over view */}
            <View className="flex gap-2">
              <AppText className="tracking-wider text-gray-500 text-main">
                Overview
              </AppText>
              <AppText className="text-wrap font-medium text-gray-200 tracking-wider">
                Hundreds of cash-strapped players accept a strange invitation to
                compete in children's games. Inside, a tempting prize awaits
                with deadly high stakes: a game that has a whopping 45.6
                billion-won prize at stake.
              </AppText>
            </View>

            {/* Generes */}
            <View className="flex-col gap-3">
              <AppText className="tracking-wider text-gray-500 text-main">
                Generes
              </AppText>
              <View className="flex-row gap-2">
                <View className="px-3 py-2 border-primary_100 bg-primary_100 rounded-md">
                  <AppText>Adventure</AppText>
                </View>
                <View className="px-3 py-2 border-primary_100 bg-primary_100 rounded-md">
                  <AppText>Action</AppText>
                </View>
                <View className="px-3 py-2 border-primary_100 bg-primary_100 rounded-md">
                  <AppText>Drama</AppText>
                </View>
              </View>
            </View>

            {/* date */}
            <View className="flex-row gap-10">
              <View className="gap-2">
                <AppText className="tracking-wider text-gray-500 text-main">
                  Release date
                </AppText>
                <AppText className="tracking-wide text-blue-200">
                  December 26, 2024 (Worldwide)
                </AppText>
              </View>
              <View className="gap-2">
                <AppText className="tracking-wider text-gray-500 text-main">
                  status
                </AppText>
                <AppText className="tracking-wide text-blue-200">
                  Released
                </AppText>
              </View>
            </View>

            {/* over view */}
            <View className="flex gap-1">
              <AppText className="tracking-wider text-gray-500 text-main">
                Casts
              </AppText>
              <AppText className="text-wrap font-medium text-gray-200 tracking-wider">
                Lee Jung-jae, Park Hae-soo, Jung Ho-yeon, Wi Ha-joon, Oh
                Young-soo, Heo Sung-tae, Kim Joo-ryoung, Tripathi Anupam, Lee
                Yoo-mi
              </AppText>
            </View>

            {/* country */}
            <View>
              <View className="gap-1">
                <AppText className="tracking-wider text-gray-500 text-main">
                  Countries
                </AppText>
                <AppText className="tracking-wide text-blue-200">
                  USA • Europe • America • China
                </AppText>
              </View>
            </View>

            <View className="flex-row gap-5">
              <View className="gap-2">
                <AppText className="tracking-wider text-gray-500 text-main">
                  Bugut
                </AppText>
                <AppText className="tracking-wide text-blue-200">
                  $21.4 million
                </AppText>
              </View>
              <View className="gap-2">
                <AppText className="tracking-wider text-gray-500 text-main">
                  Revenue
                </AppText>
                <AppText className="tracking-wide text-blue-200">
                  $900 million
                </AppText>
              </View>
            </View>

            <View className="mt-4 flex-row gap-5">
              {/* watch */}
              <TouchableOpacity className="flex-row justify-center items-center gap-2 rounded-sm bg-primary_100 py-2 min-w-44">
                <AppText className="text-main text-gray-200">Watch</AppText>
                <Ionicons color="white" name="arrow-forward" size={18} />
              </TouchableOpacity>
              {/* download */}
              <TouchableOpacity className="flex-row justify-center items-center gap-2 rounded-sm bg-primary_100 py-2 min-w-44">
                <AppText className="text-main text-gray-200">Download</AppText>
                <Ionicons color="white" name="arrow-down" size={18} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
