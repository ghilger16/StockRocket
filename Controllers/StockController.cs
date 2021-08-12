using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StockRocket.Services;

namespace StockRocket.Controllers
{

    [Route("[controller]")]
    [ApiController]


    public class StockController : ControllerBase
    {
        private readonly IStockApiService _StockApiService;

        public StockController(IStockApiService StockApiService)
        {
            _StockApiService = StockApiService;
        }



        [HttpGet]
        [Route("{searchQuery}")]
        public async Task<IActionResult> GetStockPrice(string searchQuery)
        {
            var result = await _StockApiService.GetStockPrice(searchQuery);

            return Ok(result);
        }
    }
}