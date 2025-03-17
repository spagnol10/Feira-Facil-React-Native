
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";

export default function ScreenThree() {
  return (
    <View className="flex-1 mt-10 bg-white">
      <Box className="flex flex-auto justify-end items-center">
        <Image
          className="w-100 h-100"
          size="2xl"
          source={require("@/assets/images/ThemeThree.png")}
          alt="Logo-FeiraFacil"
        />
      </Box>
      <Box className="flex-1 justify-center items-start p-4">
        <Text className="color-black font-bold text-left mt-4 p-2" size="5xl">
          Smooth Integration
        </Text>
        <Text className="color-black font-thin items-start p-2" size="4xl">
          Automated Sales
        </Text>
      </Box>
      <Box className="flex-1 justify-center items-end mr-5">
        <Pressable>
          <Button
            style={{ backgroundColor: "#252525" }}
            size="lg"
            className="rounded-full p-3.5"
            onPress={() => router.push("/(home)")}
          >
            <ButtonIcon
              color="white"
              size="lg"
              as={ArrowRightIcon} />
          </Button>
        </Pressable>
      </Box>
    </View>
  );
}
