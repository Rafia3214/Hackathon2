
"use client"

import * as React from "react"
import { Heart, ShoppingCart, Star, Search, Grid, List } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  rating: number
  image: string
  colors: string[]
}

const products: Product[] = [
  {
    id: "1",
    name: "Dictum morbi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    price: 26.00,
    originalPrice: 32.00,
    rating: 5,
    image: "/images/shoplist-1.png",
    colors: ["#FF8CB8", "#FFC93E", "#48C1C9"]
  },
  {
    id: "2",
    name: "Sodales sit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    price: 26.00,
    originalPrice: 32.00,
    rating: 4,
    image: "/images/shoplist-2.png",
    colors: ["#FF8CB8", "#FFC93E", "#48C1C9"]
  },
  {
    id: "3",
    name: "Nibh varius",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    price: 26.00,
    originalPrice: 32.00,
    rating: 5,
    image: "/images/shoplist-3.png",
    colors: ["#FF8CB8", "#FFC93E", "#48C1C9"]
  },
  {
    id: "4",
    name: "Mauris quis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    price: 26.00,
    originalPrice: 32.00,
    rating: 5,
    image: "/images/shoplist-4.png",
    colors: ["#FF8CB8", "#FFC93E", "#48C1C9"]
  },
  {
    id: "5",
    name: "Morbi sagittis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    price: 26.00,
    originalPrice: 32.00,
    rating: 4,
    image: "/images/shoplist-5.png",
    colors: ["#FF8CB8", "#FFC93E", "#48C1C9"]
  },
  {
    id: "6",
    name: "Ultrices venenatis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    price: 26.00,
    originalPrice: 32.00,
    rating: 3,
    image: "/images/shoplist-6.png",
    colors: ["#FF8CB8", "#FFC93E", "#48C1C9"]
  },
  {
    id: "7",
    name: "Scelerisque dignissim",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    price: 26.00,
    originalPrice: 32.00,
    rating: 5,
    image: "/images/shoplist-7.png",
    colors: ["#FF8CB8", "#FFC93E", "#48C1C9"]
  }
]

export default function ShopPage() {
  const [view, setView] = React.useState<"grid" | "list">("list")
  const [sortBy, setSortBy] = React.useState("best-match")
  const [perPage, setPerPage] = React.useState("15")


  

  return (
    <div className="">
      {/* Page Header */}
      <div className=" h-[286px] bg-[#F6F5FF] flex items-center py-16">
        <div className="container md:w-[1177px] mx-auto px-4">
          <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">Shop List</h1>
          <div className="flex justify-center text-[#151875] md:justify-start items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Shop List</span>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 container md:w-[1170px]  mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 md:gap-4">
            <span className="text-sm text-[#151875]">Per Page:</span>
            <Select value={perPage} onValueChange={setPerPage}>
              <SelectTrigger className="md:w-[70px]  border-gray-300 text-gray-400">
                <SelectValue placeholder=" " />
              </SelectTrigger>
              <SelectContent  className="bg-white text-[#151875]">
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="45">45</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center ml-2 gap-2 md:gap-4">
            <span className="text-sm text-[#151875]">Sort By:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="md:w-[180px] border-gray-300 text-gray-400">
                <SelectValue placeholder="" />
              </SelectTrigger >
              <SelectContent className="bg-white text-[#151875]">
                <SelectItem value="best-match">Best Match</SelectItem>
                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center md:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setView("grid")}
              className={view === "grid" ? "text-[#151875]" : "text-[#151875]"}
            >
              <Grid className="h-4 w-4 text-[#151875]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setView("list")}
              className={view === "list" ? "text-primary" : "text-muted-foreground"}
            >
              <List className="h-4 w-4 text-[#151875]" />
            </Button>
          </div>
        </div>

        <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {products.map((product) => (
            <Card key={product.id} className={`overflow-hidden w-full ${view === "list" ? "md:h-[230px]" : " md:h-[550px] "}`}>
              <CardContent className={`p-0 ${view === "list" ? "flex" : " "}`}>
                <div className={`${view === "grid" ? "flex justify-center items-center" : " md:w-2/6"}`}>
                  <div className={`${view === "list" ? " w-full h-full" : "w-[235px] h-auto"} bg-muted aspect-square overflow-hidden`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className=" object-cover"
                    />
                  </div>
                </div>
                <div className={`${view === "list" ? "w-5/6" : "w-full"} p-4 md:space-y-4`}>
                  <div>
                    <div className="md:flex justify-between md:items-center md:w-[340px]">
                      <h3 className="md:text-xl text-[#151875] font-semibold">{product.name}</h3>
                      <div className="flex items-center gap-2 md:mt-2 mr-3">
                        {product.colors.map((color) => (
                          <div
                            key={color}
                            className="w-2 h-2 md:w-4 md:h-4 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 md:w-4 md:h-4 ${i < product.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="md:text-xl font-bold font-heading text-[#151875]">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-pink-500 font-heading line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <p className={`text-muted-foreground ${view === "list" ? "hidden md:block " : " "} `}>{product.description}</p>
                  <div className="hidden md:flex md:gap-3 transition-all duration-300 ">
                    <Button

                      className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] text-[#151875] hover:text-white"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                    <Button

                      className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] text-[#151875] hover:text-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button

                      className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] text-[#151875] hover:text-white"

                    >

                      <Search className="h-4 w-4" />

                    </Button>
                  </div>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>

  )
}
