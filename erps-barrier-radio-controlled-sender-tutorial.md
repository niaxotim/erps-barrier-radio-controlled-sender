### @activities true
### @explicitHints true

# ERPS STEM WEEK :: Barrier - Radio Control Transmitter

## Introduction
### Introduction Step @unplugged
In this challenge, we are going to make the transmitter for your radio controlled barrier.  

If you haven't done so already, you need to follow [this tutorial first](https://makecode.microbit.org/#tutorial:github:niaxotim/erps-barrier-radio-controlled/erps-barrier-radio-controlled-tutorial).  
  
Don't forget, you need *a second micro:bit* for this tutorial!  
  
![Radio barrier](https://raw.githubusercontent.com/niaxotim/erps-barrier-radio-controlled-sender/master/assets/no_entry.png)

## Setting up our radio
### Step 1
First, we have to set which channel we want to use to transmit.  

Let's set our radio channel using a ``||radio:radio set group||`` block - make sure you set it to the channel you used in your barrier code!  

#### ~ tutorialhint
```blocks
radio.setGroup(255)
```

## Sending our radio signals
### Step 2
We want to be able to send signals to our barrier when we push the buttons on our micro:bit.  

Let's start with a ``||input:on button A||`` block. Inside of this block, let's add a block to transmit
on our radio. Use a ``||radio:radio send string||`` block to do this. Set the text to "up", so we tell our
barrier to move up when this is received! This matches our string in the first half of this challenge.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("up")
})
```

### Step 3
It would be nice if we knew which direction we were telling the barrier to move in; a kind of visual hint!  

Let's add in a picture of an arrow using a ``||basic:show leds||`` block.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("up")
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
```

### Step 4
Challenge - can you now make the micro:bit send a "down" signal to your barrier, using 
a ``||input:on button B||`` block?  

Check out the hint if you get stuck!

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("up")
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("down")
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
```


### Step 5
Connect your BBC micro:bit and click ``|Download|`` to transfer your code.  

Make sure that both micro:bit's are powered on, then try giving the buttons a press on your transmitter.  

Did you see your arrows on the screen, and did your barrier react as you expected?

### Barrier Basic Tutorial Complete @unplugged
Great work! You've now got a remote-controlled barrier!    
Have a think about how this might be useful, and what we could do to trigger our barrier via radio!  
![Great job](https://raw.githubusercontent.com/niaxotim/erps-barrier-radio-controlled-sender/master/assets/great_job.png)
