using System.Collections.Generic;

namespace Spa.Playground.Web.Models
{
    public class DynamicDataModel
    {
        public MetaDataModel Meta { get; set; }
        public IEnumerable<IEnumerable<object>> Content { get; set; }
    }
}