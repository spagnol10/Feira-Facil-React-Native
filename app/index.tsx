import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <Box className="flex flex-auto justify-center items-center">
        <Image
          size="2xl"
          source={require("@/assets/images/logo.png")}
          alt="Logo-FeiraFacil"
        />
        <Link href={"/(apresentation)/screenOne"}>
          <Text className="color-green-900 font-bold text-center mt-4" size="4xl">
            Feira Fácil
          </Text>
        </Link>
      </Box>
    </View>
  );
}
