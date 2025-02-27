import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";

export default function ScreenOne() {
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
        <Text className="color-black font-bold text-left mt-4" size="2xl">
          Voce mais perto das feiras da sua cidade.
        </Text>
      </Box>
      <Box className="flex-1 flex-auto justify-center items-end mr-5">
        <Pressable>
          <Button
            size="xl"
            className="rounded-full p-8"
            onPress={() => router.push("/screenTwo")}
          >
            <ButtonIcon size="xl" as={ArrowRightIcon} />
          </Button>
        </Pressable>
      </Box>
    </View>
  );
}
