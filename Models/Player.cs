using System;

namespace Spa.Playground.Models
{
    public class Player
    {
        public int Id { get; set; }
    
        public string Name { get; set; }
        
        public int ShirtNo { get; set; }
        public int Appearances { get; set; }
        public int Goals { get; set; }
        public PlayerPositions Position { get; set; }
    
        public string PositionName => Position.ToString();
    
        public decimal GoalsPerMatch => Math.Round((decimal)Goals / (decimal)Appearances, 2);
    }
}