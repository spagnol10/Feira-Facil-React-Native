import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1" style={{ backgroundColor: "#fff" }}>
      <Box className="flex flex-auto justify-center items-center">
      <Box className="flex-1 flex-auto justify-center items-end mr-5">
          <Button size="lg" className="rounded-full p-3.5" onPress={() => router.push("/(apresentation)/screenOne")}>
            <ButtonIcon as={ArrowLeftIcon} />
          </Button>
      </Box>
      </Box>
    </View>
  );
}
