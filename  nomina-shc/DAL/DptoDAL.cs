using DAL.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DptoDAL
    {
        nominashcEntities db = new nominashcEntities();
        public List<departamentos> Get(string Nit)
        {
            return db.departamentos.Where(t=> t.idEmpresa==Nit).ToList();
        }
    }
}
