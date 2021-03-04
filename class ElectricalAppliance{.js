class ElectricalAppliance{
    constructor(name, power){
        this.power = power;
        this.name = name;
        this.plugg = false;
    }

    Plugin() {
        console.log(this.name + " is plugged");
        this.plugg = true;
    }

    Unplugged() {
        console.log(this.name , "is unplugged");
        this.plugg = false;
    }
}

class TV extends ElectricalAppliance{
    constructor(name,power, diagonal){
        super(name,power)
        this.diagonal = diagonal;
        this.plugg = false;
    }
}

class PC extends ElectricalAppliance{
    constructor(name,power,ram,videoMemory){
        super(name,power);
        this.ram = ram;
        this.videoMemory = videoMemory;
        this.plugg = false;
    }
}