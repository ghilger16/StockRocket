using System;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting.Internal;
using NHibernate;
using NHibernate.Cfg;
using ISession = NHibernate.ISession;

namespace StockRocket.Mappings
{
    public class NhibernateSession
    {
        public static ISession OpenSession()
        {
            var configuration = new Configuration();
            var configurationPath = Path.Combine(@"Models/hibernate.cfg.xml");
            Configuration configuration1 = configuration.Configure(configurationPath);
            var bookConfigurationFile = Path.Combine(@"Mappings/Book.hbm.xml");
            configuration.AddFile(bookConfigurationFile);
            ISessionFactory sessionFactory = configuration.BuildSessionFactory();
            return sessionFactory.OpenSession();
        }
    }
}