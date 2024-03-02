import React from "react";

interface Asset {
  name: string;
  description: string;
  health: number;
  pollution: number;
}

const Inventory: React.FC<Asset> = (asset) => {
  return (
    <div className="pixel-box">
      <h1>
        {asset.name}
      </h1>
      <p>
        {asset.description}
      </p>
      <ul>
        <li>{asset.health}</li>
        <li>{asset.pollution}</li>
      </ul>
    </div>
  )
}

export default Inventory;
