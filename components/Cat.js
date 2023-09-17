
import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'


const Cat = (props) => {

    const [isHungry, setIsHungry] = useState(true)

    return (
        <View>
            <Text>I am  {props.Name} and {isHungry ? 'hungry' : 'full'}</Text>
            <Button
                onPress={() => {
                    setIsHungry(false)
                }}
                disabled={!isHungry}
                title={isHungry ? 'Milk' : 'Thanks'}
            />
        </View>
    )
}


export default Cat