// src/engine/buildGraph.js

export function buildGraph(entities) {

    const nodes = entities.map((entity, index) => ({

        id: entity.id,

        type: "entity",

        position: {

            x: 250 + (index % 4) * 350,

            y: 150 + Math.floor(index / 4) * 250

        },

        data: entity

    }));

    const edges = [];

    entities.forEach(entity => {

        if (!entity.relations) return;

        entity.relations.forEach(target => {

            edges.push({

                id: `${entity.id}-${target}`,

                source: entity.id,

                target

            });

        });

    });

    return {

        nodes,

        edges

    };

}