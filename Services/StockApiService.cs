using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using StockRocket.Models;

namespace StockRocket.Services
{
    public interface IStockApiService
    {
        Task<StockModel> GetStockPrice(string searchQuery);
    }

    public class StockApiService : IStockApiService
    {
        private readonly IConfiguration _config;

        public StockApiService(IConfiguration config)
        {
            _config = config;
        }

        public async Task<StockModel> GetStockPrice(string searchQuery)
        {
            var url = $"https://cloud.iexapis.com/stable/stock/{searchQuery}/quote?token=sk_f21727cb9ce3414c95535a48f85b8174";
            string json;
            json = await GetIEXAsync(url);

            return JsonConvert.DeserializeObject<StockModel>(json);

        }

        private async Task<string> GetIEXAsync(string url)
        {
            using (var client = new HttpClient())
            {
              
                var completedUrl = new Uri(url);
                var response = await client.GetAsync(completedUrl);

                string json;
                using (var content = response.Content)
                {
                    json = await content.ReadAsStringAsync();
                }

                return json;
            }
        }
    }
}