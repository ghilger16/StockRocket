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
            var url = $"https://sandbox.iexapis.com/stable/stock/{searchQuery}/quote?token=Tpk_0f3dfa80f9cf4b5196cd5cefb08cd75a";
            string json;
            json = await GetTweetsAsync(url);

            return JsonConvert.DeserializeObject<StockModel>(json);

        }

        private async Task<string> GetTweetsAsync(string url)
        {
            //var accessToken = _config["AccessToken"];
            using (var client = new HttpClient())
            {
                //client.DefaultRequestHeaders.Authorization
                //    = new AuthenticationHeaderValue("pk_22281ef262514bf88cec95667f672a51");

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