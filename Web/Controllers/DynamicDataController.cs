using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Spa.Playground.Web.Models;

namespace Spa.Playground.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DynamicDataController : ControllerBase
    {
        [HttpGet]
        public DynamicDataModel GetData()
        {
            return new DynamicDataModel
            {
                Meta = new MetaDataModel
                {
                    Columns = new List<ColumnDataModel>
                    {
                        new ColumnDataModel { Text = "Text", Type = "text" },
                        new ColumnDataModel { Text = "Enabled", Type = "bool" },
                        new ColumnDataModel { Text = "Date Time", Type = "datetime" },
                        new ColumnDataModel { Text = "Date", Type = "date" },
                        new ColumnDataModel { Text = "Time", Type = "time" },
                        new ColumnDataModel { Text = "Number", Type = "number" },
                        new ColumnDataModel { Text = "Image", Type = "imgurl" },
                        new ColumnDataModel { Text = "Link", Type = "url" }
                    }
                },
                Content = new List<List<object>> {
                    new List<object> { "r1v1", false, new DateTime(2011, 11, 01, 21, 13, 58), new DateTime(1975, 7, 1), new DateTime(1, 1, 1, 22, 15, 45), 42, new { src = "https://via.placeholder.com/50", title = "Image 1" }, new { url = "https://www.google.com/", text = "Google" } },
                    new List<object> { "r2v1", true, new DateTime(1901, 12, 1, 9, 22, 4), new DateTime(2020, 2, 15), new DateTime(1, 1, 1, 12, 35, 27), 4,  new { src = "https://via.placeholder.com/50", title = "Image 2" }, new { url = "https://www.yahoo.com/", text = "Yahoo" } },
                    new List<object> { "r3v1", false, new DateTime(1996, 3, 17, 2, 45, 23), new DateTime(2010, 12, 22), new DateTime(1, 1, 1, 2, 5, 0), 3.14, new { src = "https://via.placeholder.com/50", title = "Image 3" }, new { url = "https://www.duckduckgo.com/", text = "Duck Duck Go" } }
                }
            };
        }
    }
}