using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using AutoMapper;

namespace DAL
{
    public class NominaDAL
    {
        nominashcEntities db = new nominashcEntities();
        
        public List<EmpleadosDTO> GetMiembros()
        {
            Mapper.CreateMap<empleados, EmpleadosDTO>();
            List<EmpleadosDTO> lst = new List<EmpleadosDTO>();
            Mapper.Map(db.empleados.ToList(), lst);
            return lst;
        }
    }
}
