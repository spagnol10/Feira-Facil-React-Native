import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BellIcon, Icon, SearchIcon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import React from "react";
import { View } from "react-native";

// Dados dos produtos
const products = [
  { id: 1, name: "Tomate", price: "R$ 29,99", image: require("@/assets/images/Frutas.png") },
  { id: 2, name: "Cenoura", price: "R$ 19,99", image: require("@/assets/images/Frutas.png") },
  { id: 3, name: "Banana", price: "R$ 12,99", image: require("@/assets/images/Frutas.png") },
];

export default function Home() {
  return (
    <View className="flex-1 p-4 mt-10 bg-white">
      <Box className="flex-row justify-end items-end p-4">
        <Icon as={BellIcon} className="text-typography-500 w-6 h-6" />
      </Box>

      <Box className="flex-row justify-between items-center p-4">
        <Text className="color-black font-bold text-left p-2" size="5xl">
          Delicious food for you
        </Text>
      </Box>

      <Box className="flex justify-start items-start">
        <Card
          size="md"
          variant="elevated"
          className="m-2"
          style={{
            backgroundColor: "#00D361",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 16,
          }}
        >
          <Box className="flex-row items-center justify-between w-full">
            <Box className="flex-1">
              <Text className="color-white font-light items-start p-2" size="xl">
                A special discount
              </Text>
              <Text className="mb-1 color-white font-extrabold" size="4xl">
                Up to 50%
              </Text>
            </Box>
            <Image
              className="w-100 h-100"
              size="2xl"
              source={require("@/assets/images/Frutas.png")}
              alt="Logo-FeiraFacil"
            />
          </Box>

          <Box className="mt-4 w-40">
            <Button size="sm" style={{ backgroundColor: "#FFF", width: "100%" }}>
              <ButtonText size="md" className="color-black font-light">
                Claim voucher
              </ButtonText>
            </Button>
          </Box>
        </Card>
      </Box>

      <Box className="flex justify-center items-center p-4 bg-slate-500">
        <Input className="w-full">
          <Icon as={SearchIcon} className="text-typography-500 w-6 h-6" />
        </Input>
      </Box>

      <Box className="flex-row justify-between items-center p-4">
        <Text className="color-black font-light text-center p-2" size="xl">
          Fruits
        </Text>
        <Text className="color-black font-light text-center p-2" size="xl">
          Vegetables
        </Text>
        <Text className="color-black font-light text-center p-2" size="xl">
          Fairs
        </Text>
      </Box>

      <Box className="flex-row justify-between items-start p-4">
        {products.map((product) => (
          <Card
            key={product.id}
            size="md"
            variant="elevated"
            className="m-2 w-40 h-100"
            style={{
              backgroundColor: "#00D361",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 16,
            }}
          >
            <Box className="flex items-center justify-center">
              <Image
                className="w-100 h-100 rounded-full"
                size="2xl"
                source={product.image}
                alt="Logo-FeiraFacil"
              />
            </Box>

            <Box className="w-full text-center mb-2">
              <Text className="text-lg font-bold text-black">{product.name}</Text>
            </Box>

            <Box className="w-full text-center">
              <Text className="text-xl font-semibold text-black">{product.price}</Text>
            </Box>
          </Card>
        ))}
      </Box>

    </View>
  );
}