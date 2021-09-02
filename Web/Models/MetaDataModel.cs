using System.Collections.Generic;

namespace Spa.Playground.Web.Models
{
    public class MetaDataModel
    {
        public IEnumerable<ColumnDataModel> Columns { get; set; }
        public int? Skip { get; set; }
        public int? Take { get; set; }
        public int? Sort { get; set; }
    }
}