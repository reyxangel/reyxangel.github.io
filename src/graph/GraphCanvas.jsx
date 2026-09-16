import {

    ReactFlow,

    Background

} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { loadEntities } from "../engine/loader";

import { buildGraph } from "../engine/buildGraph";

import EntityNode from "./EntityNode";

const nodeTypes = {

    entity: EntityNode

};

export default function GraphCanvas() {

    const entities = loadEntities();

    const graph = buildGraph(entities);

    return (

        <div
            style={{

                width: "100vw",

                height: "100vh"

            }}
        >

            <ReactFlow

                nodes={graph.nodes}

                edges={graph.edges}

                nodeTypes={nodeTypes}

                fitView

                proOptions={{
                    hideAttribution: true
                }}

            >

                <Background />

            </ReactFlow>

        </div>

    );

}