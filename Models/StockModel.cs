using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockRocket.Models
{
    public class StockModel
    {
        public string Symbol { get; set; }

        public string CompanyName { get; set; }

        public double Close { get; set; }

        public bool IsUSMarketOpen { get; set; }

        public double LatestPrice { get; set; }

        public double Change { get; set; }

        public double ChangePercent { get; set; }

        public double Week52High { get; set; }

        public double Week52Low { get; set; }

    }
}
