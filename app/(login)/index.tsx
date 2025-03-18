import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import React, { useState } from "react";
import { View } from "react-native";
import { Heading } from "@/components/ui/heading";
import { router } from "expo-router";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    // Aqui você pode fazer a chamada para a API ou outra ação necessária
  };

  return (
    <View className="flex-1 mt-10 bg-white">
      <Box className="flex flex-auto justify-around items-end">
        <Image
          className="w-100 h-100"
          size="2xl"
          source={require("@/assets/images/Login.png")}
          alt="Logo-FeiraFacil"
        />
      </Box>

      <Box className="flex flex-auto justify-start items-center">
        <VStack space="xl" className="w-full p-5">
          <Heading className="leading-8" size="2xl">
            Welcome back
          </Heading>

          <Input>
            <InputField
              className="py-3 px-4"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              accessibilityLabel="Email input field"
            />
          </Input>

          <Input>
            <InputField
              className="py-3 px-4"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              accessibilityLabel="Password input field"
            />
          </Input>
        </VStack>

        <VStack className="w-full p-5">
          <Button
            size="sm"
            style={{ backgroundColor: "#1B755E" }}
            onPress={() => router.push("/(home)")}
          >
            <ButtonText size="xl">Login</ButtonText>
          </Button>
        </VStack>
      </Box>
    </View>
  );
}
