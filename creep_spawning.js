var creepSpawning = {
    run: function(spawner){
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

        if(harvesters.length < 3 && !spawner.spawning && spawner.energy >= BODYPART_COST['work'] + BODYPART_COST['carry'] + BODYPART_COST['move']) {
            var newName = 'Dat-Boi#' + Game.time;
            spawner.spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'harvester'}});
        }

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        if(builders.length < 1 && !spawner.spawning && spawner.energy >= BODYPART_COST['work'] + BODYPART_COST['carry'] + BODYPART_COST['move']) {
            var newName = 'Bob-The-Builder#' + Game.time;
            spawner.spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'builder'}});
        }

        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        if(upgraders.length < 2 && !spawner.spawning && spawner.energy >= BODYPART_COST['work'] + BODYPART_COST['carry'] + BODYPART_COST['move']) {
            var newName = 'Bob-The-upgrader#' + Game.time;
            spawner.spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'upgrader'}});
        }

        if(spawner.spawning) {
            var spawningCreep = Game.creeps[spawner.spawning.name];
            spawner.room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                spawner.pos.x + 1,
                spawner.pos.y,
                {align: 'left', opacity: 0.8});
        }
    }
};

module.exports = creepSpawning;