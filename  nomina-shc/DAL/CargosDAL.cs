using DAL.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class CargosDAL
    {
        nominashcEntities db = new nominashcEntities();
        public List<cargos> Get(string Nit)
        {
            return db.cargos.Where(t => t.idDepartamento == Nit).ToList();
        }
    }
}
