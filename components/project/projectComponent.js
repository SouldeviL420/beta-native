import { View, Text, ScrollView, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import {EvilIcons} from '@expo/vector-icons'

export default function ProjectComponent({title}) {
    const scrollX=""
    const projects=[{
        card:[
            {
                uri: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

                city:"Islamabad",
                address:"Blue Area",
                price:"$75784",
                area:"7 marla"
            },
            {
                uri:"https://lirp.cdn-website.com/28156074/dms3rep/multi/opt/01+-+True+Homes+-+Huntley+-+R02-3x2-1920w.jpg",
                city:"Rawalpindi",
                address:"Bahria",
                price:"$33745",
                area:"5 marla"
            },
            {
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgToYwrKs3eUUF8m3naXBwg8cf_fa1Vbjwg&s",
                city:"Islamabad",
                address:"Faisal Town",
                price:"$3355745",
                area:"10 marla"
            },
            {   
                uri:"https://thearchitectsdiary.com/wp-content/uploads/2024/01/Modern-Mansion-Design-3-9.webp",
                city:"Lahore",
                address:"Gulberg",
                price:"$355745",
                area:"15 marla"
            },
            {   
                uri:"https://image5.photobiz.com/8905/5_20230427152552_18668355_xlarge.jpg",
                city:"Karachi",
                address:"Clifton",
                price:"$559745",
                area:"14 marla"
            },
            {   
                uri:"https://cdn.houseplansservices.com/product/si3lgiouiuap9scoj2lers3s0i/w560x373.jpg?v=3",
                city:"Islamabad",
                address:"G-9",
                price:"$79464",
                area:"5 marla"
            },

            
        ]
    }]
  return (
    <View className="px-2 ">
      <Text className="font-bold text-xl px-2">{title}</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle="gap-2  px-3"
      >

        {projects[0].card.map((card,i)=>(
            <Item key={i} index={i} scrollX={scrollX} card={card}/>
        ))}
      </ScrollView>

    </View>
  )
}
function Item({card}){
    

    return(
        <TouchableOpacity>
            <View className="ml-1">
                <View className="bg-white rounded-lg p-2 mb-2 shadow-md">
                    <Image
                    source={{uri:card.uri}}
                    className="h-36 w-40 object-cover rounded-lg"
                    />
                    <View>
                        {/* price */}
                        <View className="px-1">
                            <Text className="font-bold text-xs text-black">{card.price}</Text>
                        </View>
                        {/* city */}
                        <View className="px-1">
                            <Text className="font-bold text-xs text-black">{card.city}</Text>
                        </View >
                        {/* address */}
                        <View className="flex-row items-center ">
                            <EvilIcons name='location' size={14} color="black"/>
                            <Text className="font-bold text-xs text-black">{card.address}</Text>
                        </View>
                        {/* area */}
                        <View className="px-1">
                            <Text className="font-bold text-xs text-black">{card.area}</Text>
                        </View>
                        
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

}