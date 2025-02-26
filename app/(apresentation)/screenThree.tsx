
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function ScreenThree() {
  return (
    <View className="flex-1 mt-10 bg-white">
      <Box className="flex flex-auto justify-end items-center">
        <Image
        className="w-full"
          size="2xl"
          source={require("@/assets/images/ThemeOne.png")}
          alt="Logo-FeiraFacil"
        />
      </Box>
      <Box className="flex-1 flex-auto justify-center items-center">
        <Text className="color-black font-bold text-center mt-4" size="2xl">
          Compra rapida
        </Text>
      </Box>
      <Box className="flex-1 flex-auto justify-center items-end mr-5">
          <Button size="lg" className="rounded-full p-3.5" onPress={() => router.push("/(home)")}>
            <ButtonIcon as={ArrowRightIcon} />
          </Button>
      </Box>
    </View>
  );
}
